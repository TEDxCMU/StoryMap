const { GoogleSpreadsheet } = require('google-spreadsheet');
const serviceAccount = require('../../config/tedxcmu-narratives.json');

const document = new GoogleSpreadsheet('1-Ei_YyqTYnRngVS9po_fcxaPer-5JyOmU989_li0mCs');

// Shell Teast: sheets.create({ name: 'Kazi', email: 'kazi.a.jawad@gmail.com', prompt: 'Hi!', story: { text: 'Test' }, latLong: { lat: 44.8745685296278, lng: -101.02407217025758 } });
module.exports = async (snapshot, context) => {
    const newValue = snapshot.data();

    await document.useServiceAccountAuth(serviceAccount);
    await document.loadInfo();

    const sheet = document.sheetsByIndex[0];
    await sheet.addRow([
        newValue.name,
        newValue.email,
        newValue.prompt,
        newValue.story?.text,
        `${newValue.latLong?.lat}, ${newValue.latLong?.lng}`,
        'PENDING',
        'PENDING'
    ]);

    return;
};
