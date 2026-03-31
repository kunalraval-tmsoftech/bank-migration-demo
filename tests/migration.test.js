const { mapToBankMaster } = require('../src/migration/mapping');

test('Mapping Test', () => {
    const input = {
        BANK_CODE: 1,
        BANK_NAME: "SBI"
    };

    const output = mapToBankMaster(input);

    expect(output.bank_code).toBe(1);
    expect(output.bank_name).toBe("SBI");
});

