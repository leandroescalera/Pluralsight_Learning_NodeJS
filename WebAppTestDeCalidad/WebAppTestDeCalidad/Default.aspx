<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebAppTestDeCalidad._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="jumbotron">
       <asp:GridView id="gvUsuario" runat="server" AutoGenerateColumns="true">

        </asp:GridView>
    </div>
    
</asp:Content>
