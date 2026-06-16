<%@page import="java.util.List"%>
<%@page import="com.Model.SessionBean"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <title>Schedule Dashboard</title>

    <link rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>

<body>

<%@ include file="header.html" %>

<header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="#" class="navbar-brand">
            DRIVESMART INTEGRATED ACADEMY
        </a>
    </nav>
</header>

<br>

<div class="row">
    <div class="container">

        <h3 class="text-center">Centralized Schedule</h3>

        <hr>

        <table class="table table-bordered table-striped">

            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Branch Location</th>
                    <th>Lesson Type</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>

                <%
                    List<SessionBean> list =
                            (List<SessionBean>) request.getAttribute("sessionList");

                    if (list != null) {

                        for (SessionBean s : list) {
                %>

                <tr>
                    <td><%= s.getSession_id()%></td>
                    <td><%= s.getStudent_name()%></td>
                    <td><%= s.getBranch_location()%></td>
                    <td><%= s.getLesson_type()%></td>
                    <td><%= s.getStatus()%></td>
                </tr>

                <%
                        }
                    }
                %>

            </tbody>

        </table>

    </div>
</div>

<%@ include file="footer.jsp" %>

</body>
</html>
