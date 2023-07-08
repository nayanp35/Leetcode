var maxConsecutiveAnswers = function(answerKey, k) {
    const maxConsecutive = (char) => {
        let charCount = 0;
        let left = 0;
        let max = 0;

        for (let right = 0; right < answerKey.length; right++) {
            if (answerKey[right] === char) charCount++;

            while (charCount > k) {
                if (answerKey[left] === char) charCount--;
                left++;
            }

            max = Math.max(max, (right - left) + 1)
        }

        return max;
    }

    return Math.max(maxConsecutive("T"), maxConsecutive("F"));
};
