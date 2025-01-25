
type CategoryTagProps = {
    categoria: string | undefined
}


export default function CategoryTag({categoria}: CategoryTagProps) {
  return (
    <div className="w-fit bg-gray-400 text-white rounded-full px-4 py-1">{categoria}</div>
  )
}
