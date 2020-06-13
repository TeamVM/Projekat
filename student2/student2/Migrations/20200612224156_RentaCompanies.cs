using Microsoft.EntityFrameworkCore.Migrations;

namespace student2.Migrations
{
    public partial class RentaCompanies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RentaCompanyId",
                table: "Cars",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "RentaCompanies",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Adresa = table.Column<string>(nullable: true),
                    Promo = table.Column<string>(nullable: true),
                    Filijale = table.Column<string>(nullable: true),
                    ocena = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentaCompanies", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_RentaCompanyId",
                table: "Cars",
                column: "RentaCompanyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_RentaCompanies_RentaCompanyId",
                table: "Cars",
                column: "RentaCompanyId",
                principalTable: "RentaCompanies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_RentaCompanies_RentaCompanyId",
                table: "Cars");

            migrationBuilder.DropTable(
                name: "RentaCompanies");

            migrationBuilder.DropIndex(
                name: "IX_Cars_RentaCompanyId",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "RentaCompanyId",
                table: "Cars");
        }
    }
}
