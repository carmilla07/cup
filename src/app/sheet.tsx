import { google } from 'googleapis'

export async function getEvents() {

    /*
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      // @ts-ignore
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    )

    const sheets = google.sheets({ version: 'v4', auth: jwt })
    */

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] })

    const sheets = google.sheets({ version: 'v4', auth })

    try {
        const range = 'Events!A2:F'
      
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.SHEET_ID,
          range,
        })
      
        var rows = response.data.values

        // @ts-ignore
          if (rows.length) {
            // @ts-ignore
            return rows.map((row) => ({
              title: row[0],
              date: row[1],
              time: row[2],
              location: row[3],
              image: row[4] ? row[4] : "undefined.png",
              link: row[5],
            }))
          }
    } catch (err) {
        console.log(err)
    }
    return []
}