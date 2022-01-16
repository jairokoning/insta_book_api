import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProfiles1642343791787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "profiles",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "stars",
                        type: "integer",
                    },
                    {
                        name: "priority",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "level",
                        type: "varchar(10)",
                    },
                    {
                        name: "has_reference",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "downloaded",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "references_checked",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "tagged_checked",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "sugestions_checked",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("profiles");
    }

}
