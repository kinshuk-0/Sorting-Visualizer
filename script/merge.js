function mergeSort()
{
    c_delay=0;

    merge_partition(0,array_size-1);

    enable
    ();
}

function merge_sort(start,mid,end)
{
    let p=start,q=mid+1;

    let Arr=[],k=0;

    for(let i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            divUpdate(divs[q-1],div_sizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            divUpdate(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            divUpdate(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            divUpdate(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }

    for(let t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        divUpdate(divs[start-1],div_sizes[start-1],"green");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        divUpdate(divs[mid],div_sizes[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}