import "reflect-metadata";
import Contacts from "../Entity/Contacts";

import { getRepository, Like } from "typeorm";
import { Request, Response, ErrorRequestHandler } from "express";

export const index = async (req: Request, res: Response) => {
    const skip = Number(req.query.skip) || 0
    const take = Number(req.query.take) || 5

    await getRepository(Contacts)
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
    await getRepository(Contacts)
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
    const campaign = await getRepository(Contacts).findOne({ where: { name } });

    if (!campaign) {
        await getRepository(Contacts)
            .save(req.body)
            .then(() => {
                res.status(201).json({
                    data: "Contacts created",
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

export async function update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, phone } = req.body
    const contacts = await getRepository(Contacts).findOne(id);
    if (contacts) {
        contacts.name = name || contacts.name
        contacts.phone = phone || contacts.phone
        await getRepository(Contacts)
            .save(contacts)
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
