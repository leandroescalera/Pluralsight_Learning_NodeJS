using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntityLayer;
using BusinessLogicLayer;

namespace WebAppTestDeCalidad
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ListarAlumno();
            }
        }
        UsuarioBE objEntidad = new UsuarioBE();
        UsuarioBL objNegocio = new UsuarioBL();
        void ListarAlumno()
        {
            DataTable dt = objNegocio.ListadoBL();
            gvUsuario.DataSource = dt;
            gvUsuario.DataBind();
        }
    }
}