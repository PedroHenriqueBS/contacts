import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";

export default function NewContact(){
  return(
    <>
      <PageHeader title="Novo contato"/>
      <Input type="text" placeholder="Nome"/>
      <Select>
        <option value={123}>Instagram</option>
        <option value={123}>Facebook</option>
        <option value={123}>Twitter</option>
        <option value={123}>Tiktok</option>
        <option value={123}>Betano</option>
      </Select>
    </>
  )
}