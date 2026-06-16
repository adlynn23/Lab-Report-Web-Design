# 
HTTP Status 500 – Internal Server Error
Type Exception Report

Message Unable to compile class for JSP:

Description The server encountered an unexpected condition that prevented it from fulfilling the request.

Exception

org.apache.jasper.JasperException: Unable to compile class for JSP: 

An error occurred at line: [226] in the generated java file: [C:\xampp\tomcat\work\Catalina\localhost\LabTestS76245\org\apache\jsp\schedule_jsp.java]
Syntax error, insert "}" to complete Block

An error occurred at line: [243] in the generated java file: [C:\xampp\tomcat\work\Catalina\localhost\LabTestS76245\org\apache\jsp\schedule_jsp.java]
Syntax error on token "}", delete this token

An error occurred at line: [244] in the generated java file: [C:\xampp\tomcat\work\Catalina\localhost\LabTestS76245\org\apache\jsp\schedule_jsp.java]
Syntax error, insert "}" to complete ClassBody

Stacktrace:
	org.apache.jasper.compiler.DefaultErrorHandler.javacError(DefaultErrorHandler.java:102)
	org.apache.jasper.compiler.ErrorDispatcher.javacError(ErrorDispatcher.java:214)
	org.apache.jasper.compiler.JDTCompiler.generateClass(JDTCompiler.java:600)
	org.apache.jasper.compiler.Compiler.compile(Compiler.java:381)
	org.apache.jasper.compiler.Compiler.compile(Compiler.java:351)
	org.apache.jasper.compiler.Compiler.compile(Compiler.java:335)
	org.apache.jasper.JspCompilationContext.compile(JspCompilationContext.java:597)
	org.apache.jasper.servlet.JspServletWrapper.service(JspServletWrapper.java:398)
	org.apache.jasper.servlet.JspServlet.serviceJspFile(JspServlet.java:383)
	org.apache.jasper.servlet.JspServlet.service(JspServlet.java:331)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:583)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:51)
	com.WEB.ScheduleServlet.doGet(ScheduleServlet.java:38)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:489)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:583)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:51)
Note The full stack trace of the root cause is available in the server logs.
