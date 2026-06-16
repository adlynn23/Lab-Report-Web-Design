/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.WEB;


import com.DAO.SessionDAO;
import com.Model.SessionBean;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author MP2-4
 */
public class ScheduleServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        SessionDAO dao = new SessionDAO();

        List<SessionBean> list = dao.getAllSessions();

        request.setAttribute("sessionList", list);

        RequestDispatcher rd = request.getRequestDispatcher("schedule.jsp");

        rd.forward(request, response);
    }
}


/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.DAO;

/**
 *
 * @author MP2-4
 */
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import com.Model.SessionBean;

public class SessionDAO {

    private String jdbcURL = "jdbc:mysql://localhost:3306/drivesmart_db";
    private String jdbcUsername = "root";
    private String jdbcPassword = "";

    private static final String insert_sql = "INSERT INTO training_sessions (student_name,branch_location, lesson_type) VALUES (?, ?, ?);";
    private static final String retrieve_sql = "SELECT * FROM training_sessions ORDER BY branch_location ASC;";

    public Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return connection;
    }

    //insert booking
    public boolean bookSession(SessionBean session) throws SQLException {

        boolean result = false;

        try (Connection connection = getConnection();
                PreparedStatement ps = connection.prepareStatement(insert_sql)) {
            ps.setString(1, session.getStudent_name());
            ps.setString(2, session.getBranch_location());
            ps.setString(3, session.getLesson_type());
            ps.setString(4, session.getStatus());
            ps.setInt(5, session.getSession_id());
            ps.executeUpdate();
        }
        return result;
    }

    //retrieve method
   public List<SessionBean> getAllSessions(){

        List<SessionBean> list =
                new ArrayList<>();

        try{

            Connection con = getConnection();
            PreparedStatement ps =
                    con.prepareStatement(retrieve_sql);

            ResultSet rs = ps.executeQuery();

            while(rs.next()){

                SessionBean s =
                        new SessionBean();

                s.setSession_id(
                        rs.getInt("session_id"));

                s.setStudent_name(
                        rs.getString("student_name"));

                s.setBranch_location(
                        rs.getString("branch_location"));

                s.setLesson_type(
                        rs.getString("lesson_type"));

                s.setStatus(
                        rs.getString("status"));

                list.add(s);
            }

            con.close();

        } catch(Exception e){
            e.printStackTrace();
        }

        return list;
    }
}
   
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Model;

/**
 *
 * @author MP2-4
 */
public class SessionBean implements java.io.Serializable {

    private int session_id;
    private String student_name;
    private String branch_location;
    private String lesson_type;
    private String status;

    public SessionBean() {
  }

    public SessionBean(int session_id, String student_name, String branch_location,String lesson_type, String status) {
        this.session_id = session_id;
        this.student_name = student_name;
        this.branch_location = branch_location;
        this.lesson_type = lesson_type;
        this.status = status;
    }

    public int getSession_id() {
        return session_id;
    }

    public void setSession_id(int session_id) {
        this.session_id = session_id;
    }
    
    
    public String getStudent_name() {
        return student_name;
    }

    public void setStudent_name(String student_name) {
        this.student_name = student_name;
    }

    public String getBranch_location() {
        return branch_location;
    }

    public void setBranch_location(String branch_location) {
        this.branch_location = branch_location;
    }

    public String getLesson_type() {
        return lesson_type;
    }

    public void setLesson_type(String lesson_type) {
        this.lesson_type = lesson_type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    
}
