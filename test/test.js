import { test, expect } from '@jest/globals';

import { healthChecker, healthSorter } from '../src/app'

test('healthChecker healthy', () => {
    const userStatus = {
        name: 'Маг',
        health: 90
    };

    const result = healthChecker(userStatus);

    expect(result).toBe('healthy');
});

test('healthChecker wounded', () => {
    const userStatus = {
        name: 'Маг',
        health: 20
    };

    const result = healthChecker(userStatus);

    expect(result).toBe('wounded');
});

test('healthChecker critical', () => {
    const userStatus = {
        name: 'Маг',
        health: 10
    };

    const result = healthChecker(userStatus);

    expect(result).toBe('critical');
});

test('healthSorter sorted', () => {
    const usersArray = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]

    const result = healthSorter(usersArray);
    const awaitedResult = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]

    expect(result).toEqual(awaitedResult);
});