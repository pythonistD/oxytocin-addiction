interface RadioBTNProps{
    name: string,
}

export default function RadioBTN({name}: RadioBTNProps){
    return (
        <div className="flex flex-row gap-2">
        <input type="radio" name={name}
          value={name} 
        />
        <div className="text-base">{name}</div>
        </div>
    )
}