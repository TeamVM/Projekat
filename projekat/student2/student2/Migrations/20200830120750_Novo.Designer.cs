﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using student2.Data;

namespace student2.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200830120750_Novo")]
    partial class Novo
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("student2.Models.CarModels", b =>
                {
                    b.Property<string>("IDAuta")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Cena")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DatumDo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DatumOd")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Godiste")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IDKompanije")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Img")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lokacija")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ocena")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Rezervisan")
                        .HasColumnType("bit");

                    b.HasKey("IDAuta");

                    b.ToTable("CarModels");
                });

            modelBuilder.Entity("student2.Models.RentaCompany", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Filijale")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Promo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ocena")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("RentaCompanies");
                });

            modelBuilder.Entity("student2.Models.SpeedCar", b =>
                {
                    b.Property<string>("IDAuta")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Cena")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DatumDo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DatumOd")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Godiste")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IDKompanije")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Img")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lokacija")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ocena")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Rezervisan")
                        .HasColumnType("bit");

                    b.HasKey("IDAuta");

                    b.ToTable("SpeedCars");
                });

            modelBuilder.Entity("student2.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("PasswordHashs")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
