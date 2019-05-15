function Slack() 
{
  var options = 
  {
    "method" : "POST",
    "payload" : 
    {
      "token": "確認するトークンを入れる",
      "channel": "help",
      "text": "トークン確認",
      "icon_emoji":":nya:",
      "username":"トークン確認"
    }
  }
  var url = "https://slack.com/api/chat.postMessage"
  UrlFetchApp.fetch(url, options);
}