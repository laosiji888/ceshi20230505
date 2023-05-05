import CryptoJS from "crypto-js";

export default {
    // 加密
    encrypt(word, keyStr, ivStr) {
        keyStr = keyStr ? keyStr : "lUGxJD5baKgjpgS4";
        ivStr = ivStr ? ivStr : "T8dWknpn";
        let key = CryptoJS.enc.Utf8.parse(keyStr);
        let iv = CryptoJS.enc.Utf8.parse(ivStr);
        let srcs = CryptoJS.enc.Utf8.parse(word);

        let encrypted = CryptoJS.DES.encrypt(srcs, key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },
    // 解密
    decrypt(word, keyStr, ivStr) {
        keyStr = keyStr ? keyStr : "lUGxJD5baKgjpgS4";
        ivStr = ivStr ? ivStr : "T8dWknpn";
        var key = CryptoJS.enc.Utf8.parse(keyStr);
        let iv = CryptoJS.enc.Utf8.parse(ivStr);

        var decrypt = CryptoJS.DES.decrypt(word, key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypt.toString(CryptoJS.enc.Utf8);
    }
};