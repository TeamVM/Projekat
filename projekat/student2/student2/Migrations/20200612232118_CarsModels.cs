using Microsoft.EntityFrameworkCore.Migrations;

namespace student2.Migrations
{
    public partial class CarsModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarModels_RentaCompanies_RentaCompanyId",
                table: "CarModels");

            migrationBuilder.DropIndex(
                name: "IX_CarModels_RentaCompanyId",
                table: "CarModels");

            migrationBuilder.DropColumn(
                name: "IDKompanije",
                table: "CarModels");

            migrationBuilder.DropColumn(
                name: "RentaCompanyId",
                table: "CarModels");

            migrationBuilder.AddColumn<string>(
                name: "ImeKompanije",
                table: "CarModels",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImeKompanije",
                table: "CarModels");

            migrationBuilder.AddColumn<string>(
                name: "IDKompanije",
                table: "CarModels",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RentaCompanyId",
                table: "CarModels",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CarModels_RentaCompanyId",
                table: "CarModels",
                column: "RentaCompanyId");

            migrationBuilder.AddForeignKey(
                name: "FK_CarModels_RentaCompanies_RentaCompanyId",
                table: "CarModels",
                column: "RentaCompanyId",
                principalTable: "RentaCompanies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
