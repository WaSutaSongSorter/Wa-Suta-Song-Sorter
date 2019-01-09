function OpenWnd() {
  var oWindow = window.open("", ""); 
  with (oWindow.document) {
    write("<html>");
    write("<head>");
    write("<title>WaSuta Song Sorter: Raw Text Results<\/title>");
    write("<style>");
		write("body { background-image: linear-gradient(to bottom right, #dbffc1, #ffff8b, #d0ecf7, #fedcff, #fdd5de); color: #7C0919; font-family: \"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,\"游ゴシック\",YuGothic,\"ヒラギノ角ゴ ProN W3\",\"Hiragino Kaku Gothic ProN\",\"メイリオ\",Meiryo,sans-serif; font-size: 15px; }");
		write("<\/style>");
    write("<\/head>");
    write("<body>");
    write(csort5);
    write("<hr>");
    write("<input type='button' value='Close' onclick='window.close()'>");
    write("<hr>");		
		write("<\/body>");
    write("<\/html>");
    close(); 
  }
}
