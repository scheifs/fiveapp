import { jest, expect, test } from '@jest/globals';
import * as loginService from '../services/login-service.js';

test('login service -- success', async () => {

    const apiResponse = {
        _id: '43354554',
        email: 'email@email.com',
        passwordHash: 'pwdhash',
        salt: 'salt',
        nickname: 'nickname',
        games: []
    }

    const fetchMock = {
        ok: true, 
        json: jest.fn(() => apiResponse)
    }

    fetch = jest.fn(() => fetchMock);
    const { _id, passwordHash, salt, nickname, games, email } = await loginService.login('emailAddress', 'password');

    expect(_id).toBe(apiResponse._id);
    expect(email).toBe(apiResponse.email);
    expect(passwordHash).toBe(apiResponse.passwordHash);
    expect(salt).toBe(apiResponse.salt);
    expect(nickname).toBe(apiResponse.nickname);
    expect(games).toBe(apiResponse.games);


});

test('login service -- failure', async () => {

    const fetchMock = {
        ok: false
    }

    fetch = jest.fn(() => fetchMock);
    await expect(loginService.login('emailAddress', 'password')).rejects.toBe('error during login');

});