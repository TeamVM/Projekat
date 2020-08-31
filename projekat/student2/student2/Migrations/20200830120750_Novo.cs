using Microsoft.EntityFrameworkCore.Migrations;

namespace student2.Migrations
{
    public partial class Novo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SpeedCars",
                columns: table => new
                {
                    IDAuta = table.Column<string>(nullable: false),
                    Img = table.Column<string>(nullable: true),
                    Ime = table.Column<string>(nullable: true),
                    Godiste = table.Column<string>(nullable: true),
                    Ocena = table.Column<string>(nullable: true),
                    Cena = table.Column<string>(nullable: true),
                    IDKompanije = table.Column<string>(nullable: true),
                    Lokacija = table.Column<string>(nullable: true),
                    DatumOd = table.Column<string>(nullable: true),
                    DatumDo = table.Column<string>(nullable: true),
                    Rezervisan = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpeedCars", x => x.IDAuta);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SpeedCars");
        }
    }
}
