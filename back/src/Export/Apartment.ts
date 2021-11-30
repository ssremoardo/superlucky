import { Request, Response } from "express";
import excel from "exceljs"
import { getRepository } from 'typeorm'
import Apartment from '../Entity/Apartment'


async function exportApartment(req: Request, res: Response, next) {
    let workbook = new excel.Workbook();
    const filename = new Date().toString() + 'apartment'
    await getRepository(Apartment)
        .find({ relations: ["user", "bloco"], order: { name: "ASC" } })
        .then((data) => {
            //data.map((apartment, i) => {
            let worksheet = workbook.addWorksheet("Relatorio");

            worksheet.columns = [
                { header: "Id", key: "id", width: 10 },
                { header: "Name", key: "name", width: 50 },
                { header: "Morador", key: "morador", width: 20 },
                { header: "Bloco", key: "bloco", width: 30 },
            ];

            // Add Array Rows
            data.map((apartment) => {
                worksheet.addRows([{
                    id: apartment.id,
                    name: apartment.name,
                    morador: apartment.user.map((us) => us.name).join(','),
                    bloco: apartment.bloco.map((bl) => bl.name).join(',')
                }]);
            })

            res.setHeader('Access-Control-Expose-Headers', "Content-Disposition"); //IMPORTANT FOR React.js content-disposition get Name
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader("Content-Disposition", "attachment; filename=" + filename + ".xlsx");
            return workbook.xlsx.write(res)
                .then(function () {
                    res.end();
                });

        })
        .catch((error) => {
            return res?.json({
                error,
                status: false,
            });
        });

}

export { exportApartment }