import CryptoJS from "crypto-js";
/**
 * 
 * 第一个参数word是待加密或者解密的字符串；
 * 第二个参数keyStr是aes加密需要用到的16位字符串的key；
 * 第三个参数是初始化向量 iv。
 */
export default {
    // 加密
    encrypt(word, keyStr, ivStr) {
        keyStr = keyStr ? keyStr : "uCcUhDRtbCBq0FFv";
        ivStr = ivStr ? ivStr : "p7n3rfBdLcxfxFKM";
        let key = CryptoJS.enc.Utf8.parse(keyStr);
        let iv = CryptoJS.enc.Utf8.parse(ivStr);
        let srcs = CryptoJS.enc.Utf8.parse(word);

        let encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },
    // 解密
    decrypt(word, keyStr, ivStr) {
        keyStr = "uCcUhDRtbCBq0FFv";
        ivStr = "p7n3rfBdLcxfxFKM";

        var key = CryptoJS.enc.Utf8.parse(keyStr);
        let iv = CryptoJS.enc.Utf8.parse(ivStr);

        var decrypt = CryptoJS.AES.decrypt(word, key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypt.toString(CryptoJS.enc.Utf8);
    }
};