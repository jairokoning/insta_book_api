import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProfilesCategories1642351968899 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "profiles_categories",
                columns: [
                    {
                        name: "profile_id",
                        type: "uuid",
                    },
                    {
                        name: "category_id",
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
                        name: "fk_profiles_categories_profile_id",
                        columnNames: ["profile_id"],
                        referencedTableName: "profiles",
                        referencedColumnNames: ["id"],
                    },
                    {
                        name: "fk_profiles_categories_category_id",
                        columnNames: ["category_id"],
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"],
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("profiles_categories", "fk_profiles_categories_profile_id");
        await queryRunner.dropForeignKey("profiles_categories", "fk_profiles_categories_category_id");
        await queryRunner.dropTable("profiles_categories");
    }

}
