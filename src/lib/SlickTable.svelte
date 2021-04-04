<script lang="ts">
  type T = unknown | object;
  import type { TableHeader, TableConfig } from '../slick-table';
  import { map, toPairs } from 'lodash';

  export let tableConfig: TableConfig<T>;
  $: items = tableConfig.items;
  $: headers = tableConfig.headers;
  $: tableRows = map(items, (item) => map(headers, (header: TableHeader<T>) => [header.value(item), item]));

  function cellStyle(item: T, columnIndex: number): string {
    const header = headers[columnIndex];
    if (header == null || header.style == null) return "";
    return toPairs(header.style(item)).map(([key, value]) => `${key}: ${value}`).join(';');
  }
</script>

<div class="slick-table" style="grid-template-columns: repeat({headers.length}, min-content)">
  {#each headers as header, columnIndex (columnIndex)}
    <div class="cell header">
      {header.text}
    </div>
  {/each}
  {#each tableRows as row, rowIndex (rowIndex)}
    {#each row as [cell, item], columnIndex (columnIndex)}
      <div class="cell" style={cellStyle(item, columnIndex)}>
        {cell}
      </div>
    {/each}
  {/each}
</div>

<style lang="scss">
  @import '../styles/main.scss';
  .slick-table {
    @include grid-center;
    .cell {
      &.header {
        font-weight: bolder;
      }
      @include grid-center;
      white-space: nowrap;
    }
  }
</style>
