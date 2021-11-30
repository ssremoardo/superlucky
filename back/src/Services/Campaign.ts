import "reflect-metadata";
import Campaign from "../Entity/Campaign";

import { getRepository, Like } from "typeorm";
import { Request, Response, ErrorRequestHandler } from "express";

export const index = async (req: Request, res: Response) => {
    const skip = Number(req.query.skip) || 0
    const take = Number(req.query.take) || 5

    await getRepository(Campaign)
        .find({ relations: ["subscription", "winner"], skip, take, order: { name: "ASC" } })
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
    await getRepository(Campaign)
        .find({ relations: ["subscription", "winner"], order: { name: "ASC" }, where: { name: Like(`%${search}%`) } })
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
    const campaign = await getRepository(Campaign).findOne({ where: { name } });

    if (!campaign) {
        await getRepository(Campaign)
            .save(req.body)
            .then(() => {
                res.status(201).json({
                    data: "Campaign created",
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
            data: "Campaign not found",
            status: false,
        });
    }
}

export async function update(req: Request, res: Response) {
    const { id } = req.params;
    const { subscription, winner, title } = req.body
    const campaign = await getRepository(Campaign).findOne(id);
    if (campaign) {
        campaign.subscription = subscription || campaign.subscription
        campaign.winner = winner || campaign.winner
        campaign.title = title || campaign.title
        await getRepository(Campaign)
            .save(campaign)
            .then(() => {
                res.status(200).json({
                    data: "Campaign updated!",
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
            data: "Campaign not found",
            status: false,
        });
    }
}

export async function destroy(req: Request, res: Response) {
    const { id } = req.params;
    const campaign = await getRepository(Campaign).findOne(id);

    if (campaign) {
        await getRepository(Campaign)
            .delete(id)
            .then(() => {
                res.json({
                    data: "Campaign removed!",
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
            data: "Campaign not found",
            status: false,
        });
    }
}
