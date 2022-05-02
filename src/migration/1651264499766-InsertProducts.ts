import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertProducts1651264499766 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "product" ("name", "price") VALUES ('Product A', 100), ('Product B', 10.5), ('Product C', 56)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "product"`);
    }

}
