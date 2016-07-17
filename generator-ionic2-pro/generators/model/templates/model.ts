export class <%= name %> {
  constructor(
  	<% attributes.forEach(function(attr, idx) {%><%=attr.declaration%> <%= attr.name %>:<%= attr.type %><%if(idx!=attributes.length-1){%><%=','%>
  	<%}%><% }); %>
  ) {  

  }
}