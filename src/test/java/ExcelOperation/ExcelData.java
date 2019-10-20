package ExcelOperation;

import org.apache.poi.ss.usermodel.*;

import java.io.*;

public class ExcelData {

    String CurrDir = System.getProperty("user.dir");
    String ExcelFile = CurrDir + File.separator + "TestData.xlsx";

    public String ExcelRead(String sheetname, int rownum, int cellnum) throws IOException
    {
        String result = null;
        try
        {
            Workbook wb = WorkbookFactory.create(new FileInputStream(ExcelFile));
            Sheet sh = wb.getSheet(sheetname);
            Row rw = sh.getRow(rownum);
            Cell ce = rw.getCell(cellnum);
            result = ce.getStringCellValue();
        }
        catch (NullPointerException e)
        {
            System.out.println("This is an empty Cell");
        }
        return result;
    }


    public void ExcelWrite(String sheetname, int rownum, int cellnum, String Data) throws IOException
    {
        try
        {
            Workbook wb = WorkbookFactory.create(new FileInputStream(ExcelFile));
            Cell ce = wb.getSheet(sheetname).createRow(rownum).createCell(cellnum);
            ce.setCellValue(Data);
            FileOutputStream fwrite = new FileOutputStream(ExcelFile);
            wb.write(fwrite);
        }
        catch (Exception e)
        {
            System.out.println("Exception occured : "+ e);
        }
    }

}
