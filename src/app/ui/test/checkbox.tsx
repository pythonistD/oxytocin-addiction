interface CheckBoxProps{
    name: string,
    onClick?: (arg: any) => void;
}

export default function CheckBox({name}: CheckBoxProps){
    return (
        <div className="flex flex-row gap-2">
        <input type="checkbox" name={name}
          value={name} 
        />
        <div className="text-base">{name}</div>
        </div>
    )
}