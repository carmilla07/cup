import { google } from 'googleapis'
import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

const eventsFolder = "1Qq_0_ZzVOwGZe0rPZ6PW1QlFVnhyU-J7"
const membersFolder = "1uhVoFsgZHL0kARBQqybjyTeAjRtq0xPY"

async function downloadImages(files: any, type: any) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/drive.readonly'] })
    const drive = google.drive({ version: 'v3', auth })

    try {
        for (let i = 0; i < files.length; i++) {
            var dest = fs.createWriteStream('./public/'+ type +'/'+files[i].name)

            drive.files.get(
                {fileId: files[i].id, alt: 'media'},
                {responseType: 'stream'},
                // @ts-ignore
                (err, {data}) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    data
                        .on('end', () => console.log('Done.'))
                        .on('error', (err: any) => {
                            console.log(err)
                            return process.exit()
                        })
                        .pipe(dest)
                }
            )
        }
        return 
      } catch (err) {
        // TODO(developer) - Handle error
        throw err;
      }
}

async function checkImages(folder: String, type: any) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/drive.readonly'] })
    const drive = google.drive({ version: 'v3', auth })

    try {
        const res = await drive.files.list({
          q: "'" + folder + "' in parents",
          fields: 'nextPageToken, files(id, name)',
          spaces: 'drive',
        });

        const dirRelativetoPublicFolder = type
        const dir = path.resolve('./public', dirRelativetoPublicFolder)
        const filenames = fs.readdirSync(dir)

        const fileDownload: any = []

        // @ts-ignore
        res.data.files.forEach((file: any) => (
            filenames.includes(file.name) ? "" : fileDownload.push({name: file.name, id: file.id})
        ))

        if(fileDownload.length > 0) {
            console.log(fileDownload)
            return downloadImages(fileDownload, type)
        } else {
            return
        }        
      } catch (err) {
        // TODO(developer) - Handle error
        throw err;
      }
}

export async function getMembers() {

    const data: any = await pullData("members")

    if (new Date().setHours(0,0,0,0) > data.writedate) {
        await checkImages(membersFolder, "members")

        const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] })
        const sheets = google.sheets({ version: 'v4', auth })

        try {
            const range = 'Members!A2:F'
        
            const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range,
            })
        
            var rows = response.data.values

            // @ts-ignore
            if (rows.length) {
                // @ts-ignore
                const data: any = rows.map((row) => ({
                name: row[0],
                role: row[1],
                team: row[2],
                image: row[3] ? row[3] : "undefined.png",
                linkedIn: row[4],
                instagram: row[5],
                }))
                saveData("members", data)
                return data
            }
        } catch (err) {
            console.log(err)
        }
        return []
    } else {
        return data.data
    }

    
}

export async function getEvents() {

    const data: any = await pullData("events")

    if (new Date().setHours(0,0,0,0) > data.writedate) {
        await checkImages(eventsFolder, "events")

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
                const data = rows.map((row) => ({
                title: row[0],
                date: row[1],
                datesort: new Date(row[1]),
                time: row[2],
                location: row[3],
                image: row[4] ? row[4] : "undefined.png",
                link: row[5],
                }))
                saveData("events", data)
                return data
            }
        } catch (err) {
            console.log(err)
        }
        return []
    } else {
        return data.data
    }

    
}

async function pullData(type: any) {
    const filepath = path.join(process.cwd(), 'data\\'+type+'.json')
    const jsonData: any = await fsPromises.readFile(filepath)
    const objdata = JSON.parse(jsonData)
    return objdata
}

function saveData(type: any, data: any) {
    data = {
        writedate: new Date().setHours(0,0,0,0),
        data: data
    }
    fs.writeFileSync('./data/' + type + '.json', JSON.stringify(data))
}