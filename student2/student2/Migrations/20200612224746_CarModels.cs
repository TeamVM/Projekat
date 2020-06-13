using Microsoft.EntityFrameworkCore.Migrations;

namespace student2.Migrations
{
    public partial class CarModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_RentaCompanies_RentaCompanyId",
                table: "Cars");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cars",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Sifra",
                table: "Cars");

            migrationBuilder.RenameTable(
                name: "Cars",
                newName: "CarModels");

            migrationBuilder.RenameIndex(
                name: "IX_Cars_RentaCompanyId",
                table: "CarModels",
                newName: "IX_CarModels_RentaCompanyId");

            migrationBuilder.AddColumn<string>(
                name: "IDAuta",
                table: "CarModels",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "IDKompanije",
                table: "CarModels",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarModels",
                table: "CarModels",
                column: "IDAuta");

            migrationBuilder.AddForeignKey(
                name: "FK_CarModels_RentaCompanies_RentaCompanyId",
                table: "CarModels",
                column: "RentaCompanyId",
                principalTable: "RentaCompanies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarModels_RentaCompanies_RentaCompanyId",
                table: "CarModels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarModels",
                table: "CarModels");

            migrationBuilder.DropColumn(
                name: "IDAuta",
                table: "CarModels");

            migrationBuilder.DropColumn(
                name: "IDKompanije",
                table: "CarModels");

            migrationBuilder.RenameTable(
                name: "CarModels",
                newName: "Cars");

            migrationBuilder.RenameIndex(
                name: "IX_CarModels_RentaCompanyId",
                table: "Cars",
                newName: "IX_Cars_RentaCompanyId");

            migrationBuilder.AddColumn<string>(
                name: "Sifra",
                table: "Cars",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cars",
                table: "Cars",
                column: "Sifra");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_RentaCompanies_RentaCompanyId",
                table: "Cars",
                column: "RentaCompanyId",
                principalTable: "RentaCompanies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
