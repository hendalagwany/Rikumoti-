using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rikumoti.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddVoiceActingProject : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_VoiceActing",
                table: "VoiceActing");

            migrationBuilder.RenameTable(
                name: "VoiceActing",
                newName: "VoiceActingProject");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VoiceActingProject",
                table: "VoiceActingProject",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_VoiceActingProject",
                table: "VoiceActingProject");

            migrationBuilder.RenameTable(
                name: "VoiceActingProject",
                newName: "VoiceActing");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VoiceActing",
                table: "VoiceActing",
                column: "Id");
        }
    }
}
