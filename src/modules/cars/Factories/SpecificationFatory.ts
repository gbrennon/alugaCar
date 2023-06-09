import { ISpecificationDTO } from "../DataTransferObjects/ISpecificationDTO";
import { Specification } from "../model/Specification";

class SpecificationFactory{
   public build(dto: ISpecificationDTO): Specification {
     const specification = new Specification(dto.name, dto.description, new Date());
     return specification;
   }
}

export { SpecificationFactory }