using Microsoft.EntityFrameworkCore.Migrations;

namespace student2.Migrations
{
    public partial class NewModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImeKompanije",
                table: "CarModels");

            migrationBuilder.AddColumn<string>(
                name: "IDKompanije",
                table: "CarModels",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IDKompanije",
                table: "CarModels");

            migrationBuilder.AddColumn<string>(
                name: "ImeKompanije",
                table: "CarModels",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
