import "reflect-metadata";
import Prize from "../Entity/Prize";

import { getRepository, Like } from "typeorm";
import { Request, Response, ErrorRequestHandler } from "express";

export const index = async (req: Request, res: Response) => {
    const skip = Number(req.query.skip) || 0
    const take = Number(req.query.take) || 5

    await getRepository(Prize)
        .find({ skip, take, order: { name: "ASC" } })
        .then((data) => {
            return res?.json({
                data,
                status: true,
            });
        })
        .catch((error) => {
            return res?.json({
                error,
                status: false,
            });
        });
};

export const search = async (req: Request, res: Response) => {
    const { search } = req.body
    await getRepository(Prize)
        .find({ order: { name: "ASC" }, where: { name: Like(`%${search}%`) } })
        .then((data) => {
            return res?.json({
                data,
                status: true,
            });
        })
        .catch((error) => {
            return res?.json({
                error,
                status: false,
            });
        });
};

export async function store(req: Request, res: Response) {
    const { name } = req.body;
    const campaign = await getRepository(Prize).findOne({ where: { name } });

    if (!campaign) {
        await getRepository(Prize)
            .save(req.body)
            .then(() => {
                res.status(201).json({
                    data: "Prize created",
                    status: true,
                });
            })
            .catch((error: ErrorRequestHandler) => {
                res.status(200).json({
                    error,
                    status: false,
                });
            });
    } else {
        res.status(200).json({
            data: "Prize not found",
            status: false,
        });
    }
}

export async function update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body
    const prize = await getRepository(Prize).findOne(id);
    if (prize) {
        prize.description = description || prize.description
        prize.title = title || prize.title
        await getRepository(Prize)
            .save(prize)
            .then(() => {
                res.status(200).json({
                    data: "Contacts updated!",
                    status: true,
                });
            })
            .catch((error: ErrorRequestHandler) => {
                res.status(200).json({
                    error,
                    status: false,
                });
            });

    } else {
        res.status(200).json({
            data: "Contacts not found",
            status: false,
        });
    }
}

export async function destroy(req: Request, res: Response) {
    const { id } = req.params;
    const contacts = await getRepository(Contacts).findOne(id);

    if (contacts) {
        await getRepository(Contacts)
            .delete(id)
            .then(() => {
                res.json({
                    data: "Contacts removed!",
                    status: true,
                });
            })
            .catch((error: ErrorRequestHandler) => {
                res.status(500).json({
                    error,
                    status: false,
                });
            });
    } else {
        res.status(200).json({
            data: "Contacts not found",
            status: false,
        });
    }
}
