<script lang="ts">
  type T = unknown | object;
  import type { TableHeader, TableConfig } from '../slick-table';
  import { map } from 'lodash';

  export let tableConfig: TableConfig<T>;
  $: items = tableConfig.items;
  $: headers = tableConfig.headers;
  $: tableRows = map(items, (item) => map(headers, (header: TableHeader<T>) => header.value(item)));
</script>

<div class="slick-table" style="grid-template-columns: repeat({headers.length}, 1fr)">
  {#each headers as header, columnIndex (columnIndex)}
    <div class="cell header">
      {header.text}
    </div>
  {/each}
  {#each tableRows as row, rowIndex (rowIndex)}
    {#each row as cell, columnIndex (columnIndex)}
      <div class="cell">
        {cell}
      </div>
    {/each}
  {/each}
</div>

<style lang="scss">
  @import '../styles/main.scss';
  .slick-table {
    @include grid-center;
  }
</style>
