import { expect, test } from '@playwright/test';

const SPECIES = '/species';
const STARWARSAPI = 'https://swapi.dev/api';

test.describe('Demo API Test', () => {
    test('should get droid and human species from Star Wars', async ({ request }) => {
        const getSpecies: any = await request.get(`${STARWARSAPI}${SPECIES}`);
        const res = await getSpecies.json();
        console.log("Starwar Specie name: ", res.results[1].name);
        console.log("Starwar Specie name: ", res.results[0].name);
        expect(res.results[0].name).toBe("Human");
        expect(res.results[1].name).toBe("Droid");
    });
});

