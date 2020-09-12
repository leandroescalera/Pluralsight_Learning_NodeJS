using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using BusinessEntityLayer;
using System.Data.SqlClient;
using System.Data;

namespace DataAccessLayer
{
    public class ConexionDA
    {
        SqlConnection cn = new SqlConnection(ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString);

        public DataTable ListadoDA()
        {
            SqlCommand cmd = new SqlCommand("SP_Usuario_Listar", cn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;

        }

    }
}
