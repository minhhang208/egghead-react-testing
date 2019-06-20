import mapChooser from '../mapChooser';

describe("mapChooser", () => {
    it("returns an image based on input given to it", () => {
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });
    it("return an default image when no input is given", () => {
        const expected = "default.jpg";
        const actual = mapChooser("");
        expect(actual).toEqual(expected);
    });
});