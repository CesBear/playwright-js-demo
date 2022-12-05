import { expect, test } from '@playwright/test';

const SPECIES = '/species';
const STARWARSAPI = 'https://swapi.dev/api';

test.describe('Demo API Test', () => {
    test('should get Droid specie from Star Wars', async ({ request }) => {
        const getSpecies: any = await request.get(`${STARWARSAPI}${SPECIES}`);
        const res = await getSpecies.json();
        console.log("Starwar Specie name: ", res.results[1].name);

        expect(res.results[1].name).toBe("Droid");
    });
}); 
