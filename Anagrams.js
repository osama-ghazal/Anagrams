function isAnagramInArray(anagram, arr){
    const sortString = (str) => str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    const sortedAnagram = sortString(anagram);
    return arr.filter(item => sortString(item) === sortedAnagram);
}

const anagrams = [
    "oz bilal tochberer",  
    "it's razorbill beachcomber", 
    "och robe tilblazer", 
    "bib chorizo cellarmaster", 
    "thor bble carizole", 
    "zll borcht aberoie", 
    "brzl orche atobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
];

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));