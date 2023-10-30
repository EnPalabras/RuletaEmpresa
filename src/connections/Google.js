import { google } from 'googleapis'

const {
  VITE_GOOGLE_SHEET_ID,
  VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  VITE_GOOGLE_PRIVATE_KEY,
} = process.env

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: VITE_GOOGLE_PRIVATE_KEY,
  },
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
})

const client = async () => {
  return await auth.getClient()
}

const googleSheets = google.sheets({
  version: 'v4',
  auth: client,
})

export const appendData = async (values) => {
  console.log(values)
  try {
    googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId: VITE_GOOGLE_SHEET_ID,
      range: 'Landing!A1:L1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: values,
      },
    })
    return 'Ok'
  } catch (error) {
    return 'Error'
  }
}
