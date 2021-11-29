function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function getStudents()
{
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var studentSheet = ss.getSheetByName("Student");
  var studentRange = studentSheet.getDataRange();
  var studentValues = studentRange.getValues();  
  return studentValues;

}

function getGrade(student)
{
  var returnData = [];
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var gradeSheet = ss.getSheetByName("Grade");
  var getLastRow = gradeSheet.getLastRow();
  for(i = 2; i <= getLastRow; i++)
  {
    if(student == gradeSheet.getRange(i, 1).getValue())
    {
      returnData.push([gradeSheet.getRange(i,2).getValue(),gradeSheet.getRange(i,3).getValue(),gradeSheet.getRange(i,4).getValue(),gradeSheet.getRange(i,5).getValue(),gradeSheet.getRange(i,6).getValue(),gradeSheet.getRange(i,7).getValue(),gradeSheet.getRange(i,8).getValue()])
    }
  }  
  return returnData;
}