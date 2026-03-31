function mapToBankMaster(row) {
    return {
        bank_code: row.BANK_CODE,
        bank_name: row.BANK_NAME,
        bank_short_name_sms: row.BANK_SHRT_NM_SMS,
        bankpara: row.BANKPARA,
        sms_sender_bank: row.SMS_SENDER_BANK,
        gst_no: row.GST_NO
    };
}

module.exports = { mapToBankMaster };
    
