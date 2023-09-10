import CalculateCostButton from '@/components/clientcomponent'; 
import { prisma } from '@/db';

export default async function Home() { 
  
  const fruits = await prisma.fruit.findMany()
  const quantity = 0
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
      <CalculateCostButton fruits={fruits} /> 
    </main>
  )
}
