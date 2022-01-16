import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProfilesTypes1642353066175 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "profiles_types",
                columns: [
                    {
                        name: "profile_id",
                        type: "uuid",
                    },
                    {
                        name: "type_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_profiles_types_profile_id",
                        columnNames: ["profile_id"],
                        referencedTableName: "profiles",
                        referencedColumnNames: ["id"],
                    },
                    {
                        name: "fk_profiles_types_type_id",
                        columnNames: ["type_id"],
                        referencedTableName: "types",
                        referencedColumnNames: ["id"],
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("profiles_types", "fk_profiles_types_profile_id");
        await queryRunner.dropForeignKey("profiles_types", "fk_profiles_types_type_id");
        await queryRunner.dropTable("profiles_types");
    }

}
