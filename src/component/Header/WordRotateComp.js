import WordRotate from '@/components/magicui/word-rotate'


function WordRotateComp() {

  const words = [
  " 83966 MT of Aggregate / Sand / Stone",
  " 352 Km of Crash Barrier",
  " 153 Km of Electrical wires",
  " 108 KL of LDO",
  " 59 KM of Pipes",
  " 950 kW of Solar Module",
  " 1363 MT of Structural Steel",
  " 11191 MT of TMT Bar"
];



    return (
        <WordRotate
            className="text-md font-bold text-headupb2b dark:text-white ml-2" // Add margin here
            words={words}
        />
    )
}

export default WordRotateComp