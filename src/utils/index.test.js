import { nFormatter, getDate, toReadableDuration } from '../utils';

describe("utililty functions", () => {

    describe("nFormatter function", () => {
        it("should format numbers correctly", () => {
            const amounts = ['-1500', '150', '1500', '15000', '1500000'];
            const formatted_amounts = amounts.map((amount) => nFormatter(amount));
            expect(formatted_amounts[0]).toBe("-2k");
            expect(formatted_amounts[1]).toBe("150");
            expect(formatted_amounts[2]).toBe("2k");
            expect(formatted_amounts[3]).toBe("15k");
            expect(formatted_amounts[4]).toBe("2M");
        });
    });

    describe("getDate function", () => {
        it("should get year only", () => {
            const str = "2021-04-05";
            const actual = getDate(str);
            expect(actual).toBe(2021);
        });
    });

    describe("toReadableDuration function", () => {
        it("should get track duration in HH::MM::SS format", () => {
            const time_in_seconds = [120, 250, 30];
            const formatted_durations = time_in_seconds.map((sec) => toReadableDuration(sec));

            expect(formatted_durations[0]).toBe("02:00");
            expect(formatted_durations[1]).toBe("04:10");
            expect(formatted_durations[2]).toBe("00:30");
        });
    });
});