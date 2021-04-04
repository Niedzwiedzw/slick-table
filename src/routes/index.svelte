<script lang="ts">
  import { range } from 'lodash';
  import { createTable } from '../slick-table';
  import SlickTable from '../lib/SlickTable.svelte';
  import type { TableHeader } from '../slick-table';
  type Person = {
    name: string;
    age: number;
  };
  const items: Person[] = range(10).map((i) => ({ name: `Human ${i+1}`, age: (i + 1) * 10 }));
  const headers: Array<TableHeader<Person>> = [
    { text: 'name', value: (person) => person.name },
    { text: 'age', value: (person) => person.age, style: (person: Person) => ({color: person.age > 50 ? 'red' : 'inherit'}) }
  ];
  $: tableConfig = createTable<Person>(items, headers);
</script>

<main>
  <SlickTable {tableConfig} />
</main>
