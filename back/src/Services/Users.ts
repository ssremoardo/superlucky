import { getRepository } from "typeorm";
import { Request, Response, ErrorRequestHandler } from "express";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Users from "../Entity/Users";

async function generateToken(user, req, res) {
    const data = await jsonwebtoken.sign(
        { id: user?.id, email: user?.email },
        //@ts-ignore
        process.env.jwtToken,
        {
            expiresIn: "10h",
        }
    );
    return res.status(200).json({
        data: { token: data, id: user.id, userIdTelegram: user.userIdTelegram },
        status: true,
    });
}
export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await getRepository(Users).findOne({ where: { email } });
    if (!user) {
        return res.json({
            data: "User not found!",
            status: false,
            code: 400
        });
    }

    const usersAll = await getRepository(Users).find()

    usersAll.map(async (user) => {
        if (!user?.userIdTelegram) {
            return res.json({
                data: "User not conection telegram!",
                status: false,
                code: 400
            });
        }
    })

    const valid = await bcrypt.compare(password, user?.password);

    if (!valid) {
        return res.json({
            data: "wrong password",
            status: false,
            code: 400
        });
    }
    return generateToken(user, req, res)


}

export const index = async (req: Request, res: Response) => {
    const skip = Number(req.query.skip) || 0
    const take = Number(req.query.take) || 5
    await getRepository(Users)
        .find({
            cache: true,
            skip,
            take,
            select: ["id", "name", "email", "celphone", "phone", "perfil"]
        })
        .then((data) => {
            res.json({
                data,
                status: true,
            });
        })
        .catch((error) => {
            res.json({
                error,
                status: false,
            });
        });
};

export async function store(req: Request, res: Response) {
    const { name, email, phone, celphone, id_profile, password } = req.body;
    if (!name) {
        res.status(200).json({
            data: "name is empty",
            status: false,
        });
    }
    if (!email) {
        res.status(200).json({
            data: "mail is empty",
            status: false,
        });
    }
    if (!id_profile) {
        res.status(200).json({
            data: "name is empty",
            status: false,
        });
    }

    const user = await getRepository(Users).findOne({ where: { email } });
    const salt = bcrypt.genSaltSync(10);
    const passwordhash = bcrypt.hashSync(password ? password : '123456', salt);
    if (!user?.email) {
        await getRepository(Users)
            .save({
                name,
                email,
                phone: phone ? phone : '',
                celphone: celphone ? celphone : '',
                password: passwordhash,
                id_profile,
            })
            .then((response) => {
                const data = jsonwebtoken.sign(
                    { id: response.id, email: user?.email },
                    //@ts-ignore
                    process.env.jwtToken,
                    { expiresIn: "10h" }
                );
                res.status(201).json({
                    data,
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
            data: "User exists",
            status: false,
        });
    }
}
export async function update(req: Request, res: Response) {
    const { id } = req.params;
    const user = await getRepository(Users).findOne(id);
    if (user) {
        await getRepository(Users)
            .update(id, req.body)
            .then(() => {
                res.status(200).json({
                    data: "User updated!",
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
            data: "User not found",
            status: false,
        });
    }
}
export async function destroy(req: Request, res: Response) {
    const { id } = req.params;
    const user = await getRepository(Users).findOne(id);

    if (user) {
        await getRepository(Users)
            .delete(id)
            .then(() => {
                res.json({
                    data: "User removed!",
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
            data: "User not found",
            status: false,
        });
    }
}
